import sys


#input comes from STDIN 
for line in sys.stdin:
    #remove leading and trailing whitespace
    line = line.strip()
    # split the line into words
    words = line.split()
    for word in words:
        key =''.join(sorted(set(word), key=word.index)).lower()
        final_key = "".join(sorted(key)).lower()
        print("{}\t{}".format(final_key,word))