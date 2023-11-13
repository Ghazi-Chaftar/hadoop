#!/usr/bin/env python
"""mapper3.py"""
import sys


neg_list = ["null", "insatisfait","bof","incompétents"]
pos_list = ["satisfait","super","excellent"]
#input comes from STDIN 

for line in sys.stdin:
    state = ""
    #remove leading and trailing whitespace
    line = line.strip()
    # split the line into words
    words = line.split()

    for word in words:
        if word in neg_list:
            if state == "positive":
                state = "null"
            else:
                state = "negative"
        elif word in pos_list:
            if state == "negative":
                state = "null"
            else:
                state = "positive"
    if state == "negative":
        print("insatisfait \t 1")
    elif state == "positive":
        print("satisfait \t 1")
    else :
        print("inconcluant \t 1")
