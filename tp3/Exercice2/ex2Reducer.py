import sys
# Initialise variables
current_word = None
current_count = 0
words_dict = {}
word = None
# Iterate Through input lines, which are sorted by key (word) in ascending order 
for line in sys.stdin:
    # Remove leading and trailing whitespace
    line = line.strip()
    #split the key (word) and value (count) by a tab character
    key, word = line.split("\t",1)
    if key in words_dict :
        words_dict[key].append(word)
    else :
        words_dict[key] = [word]


for k,v in words_dict.items():
    if len(v) >= 2:
        print('{}'.format(v))

