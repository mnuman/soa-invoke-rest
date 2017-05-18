#!/bin/bash
curl -X POST localhost:8080/my-endpoint?aap=1\&noot=2  -H "Content-Type: application/json" --data @request.json
