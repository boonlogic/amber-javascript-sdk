# AmberApiServer.PutStreamRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vector** | [**[PutStreamFeature]**](PutStreamFeature.md) |  | 
**submitRule** | **String** | Policy for submitting sensor fusion vector on this request, overriding per-feature submit rules in fusion configuration. One of \&quot;default\&quot;, \&quot;submit\&quot;, \&quot;nosubmit\&quot; (defaults to \&quot;default\&quot;). Under \&quot;default\&quot; policy, the per-feature settings of \&quot;submit\&quot; or \&quot;nosubmit\&quot; are used to determine whether this update to the fusion vector triggers an inference. | [optional] 

<a name="SubmitRuleEnum"></a>
## Enum: SubmitRuleEnum

* `_default` (value: `"default"`)
* `submit` (value: `"submit"`)
* `nosubmit` (value: `"nosubmit"`)

