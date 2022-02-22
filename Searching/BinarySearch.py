def BinarySearch1( arr, trg, first, last ):

    while first <= last:
        mid = first + (last - first)//2 
        if arr[mid] == trg:
            return mid
        else:
            if trg > arr[mid]:
                first = mid + 1
            else:
                last = mid -1
    return -1

       


def BinarySearch2( arr, trg,first, last ):

    if last >= first:
        mid = first + (last - first)//2

        if arr[mid] == trg:
            return mid
        else:
            if trg > arr[mid]:
                return( BinarySearch2(arr,trg, mid+1,last) )
            else: 
                return( BinarySearch2(arr, trg, first, mid-1) )
    else:
        return -1


x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
y1 = BinarySearch1( x, 0, 0, len(x)-1 )
print(y1)
y2 = BinarySearch2( x, 0, 0, len(x)-1 )
print(y2)