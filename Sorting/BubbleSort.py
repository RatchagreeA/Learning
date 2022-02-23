def BubleSort (x):
    for i in range(len(x)):
        for j in range(len(x)-1-i):
            if x[j] > x[j+1]:
                x[j], x[j+1] = x[j+1], x[j]


x = [9,8,7,6,5,4,3,2,1,0]
BubleSort(x)
print(x)