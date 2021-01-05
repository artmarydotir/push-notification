#!/bin/bash
curl -X POST -H "Authorization: key=<a>" -H "Content-Type: application/json" \
   -H "Content-Type: application/json" \
   -d '{
  "data": {
    "notification": {
        "title": "FCM Message",
        "body": "This is an FCM Message",
        "icon": "http://127.0.0.1:8080/icon.png",
        "click_action": "noway.com"
    }
  },
  "to": "<btoken>"
}' https://fcm.googleapis.com/fcm/send
