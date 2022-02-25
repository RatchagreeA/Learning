def MergeSort (x):
    print(x)
    if len(x) > 1:
        mid = len(x)//2
        L_arr = x[:mid]
        R_arr = x[mid:]

        MergeSort(L_arr)
        MergeSort(R_arr)

        i = j = k = 0
        print("0 :",L_arr,R_arr,i,j,k,x)
        while i < len(L_arr) and j < len(R_arr):
            if L_arr[i] < R_arr[j]:
                x[k] = L_arr[i]
                i += 1
            else:
                x[k] = R_arr[j]
                j += 1
            k += 1
        print("1 :",x,i,j,k)
        while i < len(L_arr):
            x[k] = L_arr[i]
            i += 1
            k += 1
        print("2 :",x,i,j,k)
        while j < len(R_arr):
            x[k] = R_arr[j]
            j += 1
            k +=1
        print("3 :",x,i,j,k)


x = [9,8,7,6,5,4,3,2,1,11]
MergeSort (x)
print(x)