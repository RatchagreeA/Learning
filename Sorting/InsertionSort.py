def InsertionSort (x):
    for i in range(len(x)):
        j = i
        while j > 0 and x[j] < x[j-1]:
            x[j], x[j-1] = x[j-1], x[j]
            j = j -1 
        print(i,x)

x = [9,8,7,6,5,4,3,2,1,11]
InsertionSort(x)