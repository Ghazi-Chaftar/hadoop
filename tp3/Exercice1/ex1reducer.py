import sys
# Initialise variables
current_word = None
current_count = 0
len_list = []
word = None
# Iterate Through input lines, which are sorted by key (word) in ascending order 
for line in sys.stdin:
    # Remove leading and trailing whitespace
    line = line.strip()
    #split the key (word) and value (count) by a tab character
    word, length = line.split("\t",1)
    # convert the count into integer
    try:
        length = int(length)
    except ValueError:
        # if conversin fails, skip this line
        continue
    len_list.append(length)
    current_count += length
    
# print the result for the last word
print('la moyenne est {}'.format(current_count/len(len_list)))
