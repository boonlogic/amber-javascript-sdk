const fs = require('fs')

/**
 * TSMuxFromBlobs process strings containing time series records in JSON or CSV format
 *
 *     when format is 'json', file entries should look like:
 *
 *     {"TimeStamp":"2021-10-26T00:00:00.000Z","Value":"0.5"}
 *     {"TimeStamp":"2021-10-26T00:01:00.000Z","Value":"1.1"}
 *
 *     or
 *
 *     when format is 'csv', file entries should look like:
 *
 *     2021-10-26T00:00:00.000Z,0.5
 *     2021-10-26T00:01:00.000Z,1.1
 *
 *
 * @param  {string} format [format of input files, json or csv]
 * @param  {...array} blobs [strings containing data, vectors will be built in order the files are provided]
 * @return {array} csv string
 */
export function TSMuxFromBlobs(format, blobs) {
    try {
        let objs = []
        let featureIdx = 0
        if (!['json', 'csv'].includes(format)) {
            console.log(`unknown format ${format}, must be either 'json' or 'csv'`)
            return null
        }
        for (let blob of blobs) {
            let obj = createTsMuxArray(blob, format, featureIdx, 'TimeStamp', 'Value')
            objs = objs.concat(obj)
            featureIdx++
        }
        objs = objs.sort(compare)
        return createTsVectors(featureIdx, objs)
    } catch (error) {
        console.log(error)
    }
}

/**
 * TSMuxFromFiles process files containing time series records in JSON or CSV format
 *
 *     when format is 'json', file entries should look like:
 *
 *     {"TimeStamp":"2021-10-26T00:00:00.000Z","Value":"0.5"}
 *     {"TimeStamp":"2021-10-26T00:01:00.000Z","Value":"1.1"}
 *
 *     or
 *
 *     when format is 'csv', file entries should look like:
 *
 *     2021-10-26T00:00:00.000Z,0.5
 *     2021-10-26T00:01:00.000Z,1.1
 *
 *
 * @param  {string} format [format of input files, json or csv]
 * @param  {array} files [data files to read from, vectors will be built in order the files are provided]
 * @return {string} csv string
 */
export function TSMuxFromFiles(format, files) {
    try {
        let objs = []
        let featureIdx = 0
        if (!['json', 'csv'].includes(format)) {
            console.log(`unknown format ${format}, must be either 'json' or 'csv'`)
            return null
        }
        for (let file of files) {
            let blob = fs.readFileSync(file).toString('utf-8')
            let obj = createTsMuxArray(blob, format, featureIdx, 'TimeStamp', 'Value')
            objs = objs.concat(obj)
            featureIdx++
        }
        objs = objs.sort(compare)
        return createTsVectors(featureIdx, objs)
    } catch (error) {
        console.log(error)
    }
}


/**
 * createTsMuxArray read json
 * @param  {string} blob [raw csv data with newlines]
 * @param  {string} format [format of blob, either json or csv]
 * @param  {string} featureIdx [vector position]
 * @param  {string} tsLabel [label of timestamp (eg. 'TimeStamp')]
 * @param  {string} valLabel [label of values (eg. 'Values')]
 * @return {[object]} object_array [array of objects]
 */
function createTsMuxArray(blob, format, featureIdx, tsLabel, valLabel) {

    try {
        let objArray = []
        let processor = null
        let lines = null
        if (format === 'json') {
            processor = processJsonEntry
        } else if (format === 'csv') {
            processor = processCsvEntry
        } else {
            console.log(`unknown format ${format}, must be either 'json' or 'csv'`)
            return null
        }
        lines = blob.match(/[^\r\n]+/g);
        let lineNo = 0
        let startOfData = false
        for (let line of lines) {
            lineNo++

            // process the line and normalize into object
            let jsonObj = processor(line, tsLabel, valLabel)
            if (jsonObj === null) {
                if (startOfData === false) {
                    if (lineNo > 200) {
                        throw `header exceeded 200 lines`
                    }
                    continue
                }
                throw `line ${lineNo}, malformed '${format}' entry}`
            } else {
                if (startOfData === false && lineNo > 1) {
                    console.log(`skipped ${lineNo - 1} lines of header`)
                    startOfData = true
                }
            }

            // verify timestamp
            if (Date.parse(jsonObj.ts) <= 0) {
                throw `line ${lineNo}, invalid timestamp format`
            }

            // Normalize value

            jsonObj['featureIdx'] = featureIdx

            objArray.push(jsonObj)
        }
        return objArray
    } catch (error) {
        console.log(error)
        throw error
    }
}

let processJsonEntry = function(line, tsLabel, valLabel) {
    if (line[0] !== '{' || line.slice(-1) !== '}') {
        return null
    }
    let jsonObj = JSON.parse(line)
    if (jsonObj.hasOwnProperty(tsLabel) === false) {
        return null
    }
    if (jsonObj.hasOwnProperty(valLabel) === false) {
        return null
    }
    return ({
        'ts': jsonObj[tsLabel],
        'value': jsonObj[valLabel]
    })
}

let processCsvEntry = function(line) {
    let fields = line.split(",")
    if (fields.length !== 2) {
        return null
    }
    // first field should be timestamp
    // second field should be value
    return {
        'ts': fields[0],
        'value': fields[1]
    }
}

/**
 * createTsVectors read json
 * @param  {array} tags [array of feature tags]
 * @param  {array} tsObjs [array of time series objects]
 * @return {string} csv string
 */
function createTsVectors(count, tsObjs) {
    try {

        // initialize vector to undefined
        let vector = []
        for (let idx = 0; idx < count; idx++) {
            vector[idx] = undefined
        }

        // replay the time series objects to build fusion vectors
        let vectorArray = Array()
        let vectorList = []
        let initCnt = 0
        for (let tsObj of tsObjs) {
            let featureIdx = tsObj.featureIdx

            if (initCnt !== vector.length) {
                if (vector[featureIdx] === undefined) {
                    initCnt++
                }
            }
            vector[featureIdx] = tsObj

            if (initCnt !== vector.length) {
                // still initializing
                continue
            }

            // Update vector
            for (let v = 0; v < vector.length; v++) {
                vectorArray.push(vector[v].value)
            }
        }
        return vectorArray.join(",")
    } catch (error) {
        console.log(error)
    }
}

function compare(a, b) {
    if (Date.parse(a.ts) < Date.parse(b.ts)) {
        return -1;
    }
    return 0;
}