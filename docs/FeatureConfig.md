# AmberApiServer.FeatureConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxVal** | **Number** | corresponding maximum value | [optional] 
**minVal** | **Number** | the value that should be considered the minimum value for this feature. This can be set to a value larger than the actual min if you want to treat all value less than that as the same (for instance, to keep a noise spike from having undue influence in the clustering | [optional] 
**weight** | **Number** | corresponding weight | [optional] 
**label** | **String** | label associated with feature | [optional] 
**submitRule** | **String** | policy for submitting sensor fusion vector when this feature is updated. One of \&quot;submit\&quot;, \&quot;nosubmit\&quot; (defaults to \&quot;submit\&quot;) | [optional] 

<a name="SubmitRuleEnum"></a>
## Enum: SubmitRuleEnum

* `submit` (value: `"submit"`)
* `nosubmit` (value: `"nosubmit"`)

