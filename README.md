## Un authenticated API access

### List everything 
https://splunkbase.splunk.com/api/v1/app/?limit=100&offset=100

### Release info for a given appID
https://splunkbase.splunk.com/api/v1/app/<uid>/release
```
{"id":29529,"app":6912,"name":"0.9.0","product":{"name":"splunk","display_name":"Splunk"},"release_notes":"0.9.0 - Initial Beta Release","CIM_versions":["5.x"],"product_versions":["9.1","9.0","8.2","8.1","8.0"],"created_datetime":"2023-05-24T19:57:35.054210Z","published_datetime":"2023-05-24T19:57:35.054222Z","size":21382,"filename":"jamf-protect-add-on_090.tgz","platform":"independent","install_method_single":"simple","install_method_distributed":"appmgmt_phase","fedramp_validation":"no","cloud_compatible":true}]

```


### V2 Apps query
https://splunkbase.splunk.com/api/v2/apps?query=proofpoint


```

{
  "offset": 0,
  "limit": 20,
  "total": 16,
  "results": [
    {
      "id": 5522,
      "app_id": "TA-proofpoint-isolation",
      "product_compatibility": "splunk",
      "product_types": [
        "enterprise",
        "cloud"
      ],
      "app_name": "Proofpoint Isolation TA for Splunk",
      "description": "The reporting API provides a feed for all user request activity within the Browser/Email and URL Isolation products.\n\nFor each entry within the API, the result contains a URL with an associated classification and disposition.\n\nThe available dispositions are:\n\nEXIT_ISOLATION    – User exited Isolation.\nBLOCK             – Isolation blocked the URL.\nALLOW             – Isolation allows the URL to be displayed.\nBLOCK_DOWNLOAD    - Isolation blocked a download attempt.\nBLOCK_UPLOAD      - Isolation blocked an upload attempt.\nBLOCK_IFRAME      - Isolation blocked the URL from being displayed inside the iFrame.\nALLOW_DOWNLOAD    - Isolation allowed a download.\nALLOW_UPLOAD      - Isolation allowed an upload.\nALLOW_IFRAME      - Isolation allowed the URL to be displayed inside the iFrame.\n\nThe available classifications are:\n\nUSER              – Action performed by a user.\nMALWARE           – Classified as malware.\nCONTENT_FILTERING – Classified as URL defined as should block in the content filtering configuration.\nPHISH             – Classified as a phishing URL.\nBLOCKED_BY_POLICY – Classified as should be blocked by the policy defined in the Mail security product (valid only in URL isolation).\nDLP               - Blocked by DLP policy.\n\nAPI Endpoints:\n\nWeb Isolation URI: https://proofpointisolation.com/api/v2/reporting/usage-data\nURL Isolation URI: https://urlisolation.com/api/v2/reporting/usage-data",
      "created_time": "2021-04-29T22:57:12.291450Z",
      "published_time": "2021-04-30T19:46:34.257613Z",
      "updated_time": "2023-07-24T01:45:56.364095Z",
      "app_type": "addon",
      "contact_email": "isolation-feedback@proofpoint.com",
      "contact_notes": "",
      "access": "unrestricted",
      "approved": true,
      "inquiry_url": "",
      "inquiry_buttontext": "Learn More",
      "price": "",
      "license_name": "Proofpoint EULA",
      "license_url": "https://www.proofpoint.com/us/license",
      "license": {
        "canonical_name": "Proofpoint EULA",
        "display_name": "Proofpoint EULA",
        "url": "https://www.proofpoint.com/us/license"
      },
      "appinspect_passed": true,
      "schedule_release": null,
      "display_editors": false,
      "is_directory_listing": false,
      "is_splunk_built": false,
      "is_soar_certified": false,
      "cloud_compatible": true,
      "archive_status": "live",
      "is_archived": false,
      "fedramp_validation": "no",
      "contains_encryption": false,
      "download_count": 727,
      "install_count": 0,
      "app_url": "https://splunkbase.splunk.com/app/5522/",
      "video_link": null
    },
    {
      "id": 4289,
      "app_id": "TA-proofpoint-digital-risk-app-for-splunk",
      "product_compatibility": "splunk",
      "product_types": [
        "enterprise"
      ],


```
