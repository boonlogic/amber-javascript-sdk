# AmberApiServer.PostConfigRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**featureCount** | **Number** | number of features per sample | 
**streamingWindowSize** | **Number** | streaming window size | 
**samplesToBuffer** | **Number** | the number of samples to be applied before autotuning begins | [optional] 
**anomalyHistoryWindow** | **Number** | the number of samples to use when calculating AH | [optional] 
**learningRateNumerator** | **Number** | enables graduation requirements for learning | [optional] 
**learningRateDenominator** | **Number** | enables graduation requirements for learning | [optional] 
**learningMaxClusters** | **Number** | learning graduation requirement for stopping learning upon reaching this cluster count | [optional] 
**learningMaxSamples** | **Number** | learning graduation requirement for stopping learning after acquiring this many samples | [optional] 
**features** | [**[FeatureConfig]**](FeatureConfig.md) |  | [optional] 
