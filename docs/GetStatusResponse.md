# AmberApiServer.GetStatusResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pca** | [**PCA**](PCA.md) |  | 
**clusterGrowth** | [**Uint64Array**](Uint64Array.md) |  | 
**clusterSizes** | [**Uint64Array**](Uint64Array.md) |  | 
**anomalyIndexes** | [**Uint16Array**](Uint16Array.md) |  | 
**frequencyIndexes** | [**Uint16Array**](Uint16Array.md) |  | 
**distanceIndexes** | [**Uint16Array**](Uint16Array.md) |  | 
**totalInferences** | **Number** | inferences since the most recent restart | 
**numClusters** | **Number** |  | 
**anomalyThreshold** | **Number** |  | 
**state** | **String** | state of the sensor, states will be prefixed with a state variable  followed by a colon followed by a message indicating progress.  Possible state variables  are: Not streaming, Buffering, Autotuning, Learning, Learning Complete, Monitoring,  Streaming error,  Autotuning error, Autotuning retry | 
