import sys


#input comes from STDIN 
for line in sys.stdin:
    #remove leading and trailing whitespace
    line = line.strip()
    # split the line into words
    words = line.split(',')
    for word in words:
        year , temp = word.split(":")
        print("{} \t {}".format(year[1:5],temp[0:len(temp)-1]))