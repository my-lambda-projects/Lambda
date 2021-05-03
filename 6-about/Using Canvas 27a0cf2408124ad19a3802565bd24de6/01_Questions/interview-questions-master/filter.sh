#!/usr/bin/env bash

# Example of converting questions to JSON, filtering and sorting.
# Uses the excellent jq JSON processor: https://stedolan.github.io/jq/

python3 validate.py schema.json < interview-questions.yml | \
    jq '.[] |
        select(.who | contains(["engineer"]) or (length == 0)) |
        select(.tags | contains(["culture", "process"]))' | \
    jq -s 'sort_by(.pri)'
