# AmberApiServer.GetConfigResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**featureCount** | **Number** | number of features per sample | 
**streamingWindowSize** | **Number** | streaming window size | 
**samplesToBuffer** | **Number** | the number of samples to be applied before autotuning begins | 
**anomalyHistoryWindow** | **Number** | the number of samples to use when calculating AH | 
**learningRateNumerator** | **Number** | enables graduation requirements for learning | 
**learningRateDenominator** | **Number** | enables graduation requirements for learning | 
**learningMaxClusters** | **Number** | learning graduation requirement for stopping learning upon reaching this cluster count | 
**learningMaxSamples** | **Number** | learning graduation requirement for stopping learning after acquiring this many samples | 
**features** | [**[FeatureConfig]**](FeatureConfig.md) |  | 
**percentVariation** | **Number** | the percent variation (for instance, 0.025 gives 2.5% variation) used for clustering | 
