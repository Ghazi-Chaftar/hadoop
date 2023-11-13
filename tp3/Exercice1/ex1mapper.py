import sys


#input comes from STDIN 
for line in sys.stdin:
    #remove leading and trailing whitespace
    line = line.strip()
    # split the line into words
    words = line.split()
    for word in words:
        print("{}\t{}".format(word,len(word)))