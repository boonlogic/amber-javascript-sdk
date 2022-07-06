# AmberApiServer.GetConfigResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**featureCount** | **Number** | number of features per sample | 
**streamingWindowSize** | **Number** | streaming window size | 
**features** | [**[FeatureConfig]**](FeatureConfig.md) |  | 
**percentVariation** | **Number** | the percent variation (for instance, 0.025 gives 2.5% variation) used for clustering | 
**samplesToBuffer** | **Number** | the number of samples to be applied before autotuning begins | 
**percentVariationOverride** | **Number** | override autotuned percent variation with this value | [optional] 
