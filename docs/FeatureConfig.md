# AmberApiServer.FeatureConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**versionNumber** | [**VersionNumber**](VersionNumber.md) |  | [optional] 
**minVal** | **Number** | the value that should be considered the minimum value for this feature. This can be set to a value larger than the actual min if you want to treat all value less than that as the same (for instance, to keep a noise spike from having undue influence in the clustering | 
**maxVal** | **Number** | corresponding maximum value | 
**weight** | **Number** | corresponding weight | [optional] 
