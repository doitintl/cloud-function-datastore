# Google Cloud Functions Cloud Datastore sample

This recipe shows you how to write and query entity in Cloud Datastore from a
Cloud Function.

## Deploy and Test

1. Follow the [Cloud Functions quickstart guide][quickstart] to setup Cloud
Functions for your project.

1. Clone this repository:

        git clone https://github.com/doitintl/cloud-function-datastore.git
        cd nodejs-docs-samples/functions/cloud-function-datastore

1. Ensure the Cloud Datastore API is enabled:

  [Click here to enable the Cloud Datastore API](https://console.cloud.google.com/flows/enableapi?apiid=datastore.googleapis.com&redirect=https://github.com/GoogleCloudPlatform/nodejs-docs-samples/tree/master/functions/datastore)

1. Deploy the "get" function with an HTTP trigger:

        gcloud functions deploy datastoreQuery --trigger-http

1. Get the function url 

        gcloud functions describe datastoreQuery

1. Call the function

```bash
curl "https://[YOUR_REGION]-[YOUR_PROJECT_ID].cloudfunctions.net/get"
```