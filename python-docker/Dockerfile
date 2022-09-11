# syntax=docker/dockerfile:1
FROM python:3.8-slim-buster
WORKDIR /app
COPY requirements.txt /app/
RUN pip3 install -r requirements.txt
RUN pip install --upgrade azure-cognitiveservices-vision-computervision
RUN pip install pillow
COPY . .
RUN RES_GROUP=DFS_Hackathon
RUN ACCT_NAME=ALPR-Banana-Monkies

RUN export ACCOUNT_REGION=$(az cognitiveservices account show \
    --resource-group $RES_GROUP \
    --name $ACCT_NAME \
    --query location \
    --output tsv)

RUN export ACCOUNT_KEY=$(az cognitiveservices account keys list \
    --resource-group $RES_GROUP \
    --name $ACCT_NAME \
    --query key1 \
    --output tsv)
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]