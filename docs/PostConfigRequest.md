# AmberApiServer.PostConfigRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**featureCount** | **Number** | number of features per sample | 
**streamingWindowSize** | **Number** | streaming window size | 
**features** | [**[FeatureConfig]**](FeatureConfig.md) |  | [optional] 
**samplesToBuffer** | **Number** | the number of samples to be applied before autotuning begins | [optional] 
**percentVariationOverride** | **Number** | override autotuned percent variation with this value | [optional] [default to -1.0]
