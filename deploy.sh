export PROJECT_ID=crested-primacy-413823
export REGION=us-east1

gcloud builds frontend \
  --tag gcr.io/$PROJECT_ID/frontend \
  --project $PROJECT_ID

gcloud run deploy frontend \
  --image gcr.io/$PROJECT_ID/frontend \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --project $PROJECT_ID