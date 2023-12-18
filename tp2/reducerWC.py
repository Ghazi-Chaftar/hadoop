#!/usr/bin/env python
"""reducer3.py"""
import sys
# Initialise variables
current_word = None
current_count = 0

word = None
# Iterate Through input lines, which are sorted by key (word) in ascending order 
for line in sys.stdin:
    # Remove leading and trailing whitespace
    line = line.strip()
    #split the key (word) and value (count) by a tab character
    word, count = line.split("\t",1)
    # convert the count into integer
    try:
        count = int(count)
    except ValueError:
        # if conversin fails, skip this line
        continue
    # If current word is the same as the previous word, increment the count 
    if current_word == word:
        current_count += count
    else:
        # If the word changes, print the result for the previous word
        if current_word:
            print('{}\t{}'.format(current_word,current_count))
        # reset the variables for the new word
        current_word = word
        current_count = count
# print the result for the last word


print('{}\t{}'.format(current_word,current_count))
