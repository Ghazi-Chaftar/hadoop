import sys

# Initialize variables
current_year = None
current_count = 0
result = 0
year = None

for line in sys.stdin:
    line = line.strip()

    year, temp = line.split("\t", 1)

    try:
        final_temp = int(temp)
    except ValueError:
        continue

    if current_year == year:
        current_count += 1
        result += final_temp
    else:
        if current_year is not None:
            print('{}\t{}'.format(current_year, int(result / current_count)))
        
        current_year = year
        current_count = 1
        result = final_temp

# Print the result for the last year
if current_year is not None:
    print('{}\t{}'.format(current_year, int(result / current_count)))