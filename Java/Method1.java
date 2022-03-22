public class Method1 {
    public static void main(String[] args) {
        display("Hello World");
        plus(10,2);
        String txt =  getText();
        display(txt);
        int[] arrT = {1, 5, 77, 44, 99, 65};
        int[] arrY = {1, 5, 77, 44, 99, 65};
        dispArray(arrT);

        int result;
        result = findMax(arrT);
        System.out.println("Max = " + result);
        result = findMin(arrT);
        System.out.println("Min = " + result);

        result = findMaxIdx(arrT);
        System.out.println("MaxIdx = " + result);
        result = findMinIdx(arrT);
        System.out.println("MinIdx = " + result);

        boolean cmpResult;
        cmpResult = compareArr(arrT, arrY);
        System.out.println("cmpResult = " + cmpResult);

        int[] arrA = {1, 5, 77};
        int[] arrB;
        swapEle(arrA, 0, 2);
        dispArray(arrA);
        arrB = copyArr(arrA);
        dispArray(arrB);
    }
    private static void display(String text){
        System.out.println(text);
    }
    private static void plus(int a, int b){
        System.out.println(a+b);
    }
    private static String getText(){
        return "TEXT 123!";
    }
    private static void dispArray(int[] arr){
        System.out.print("{ ");
        for (int i = 0;i<arr.length;i++){
            System.out.print(arr[i]);
            if (i <arr.length-1){
                System.out.print(", ");
            }
        }
        System.out.println(" }");
    }
    private static int findMax(int[] arr){
        int maxVal = arr[0];
        for (int i = 0;i<arr.length;i++){
            if (arr[i]>maxVal) {
                maxVal = arr[i];
            }
        }
        return maxVal;
    }
    private static int findMin(int[] arr){
        int minVal = arr[0];
        for (int i = 0;i<arr.length;i++){
            if (arr[i]<minVal) {
                minVal = arr[i];
            }
        }
        return minVal;
    }
    private static int findMaxIdx(int[] arr){
        int maxIdx = 0;
        for (int i = 0;i<arr.length;i++){
            if (arr[i]>arr[maxIdx]) {
                maxIdx = i;
            }
        }
        return maxIdx;
    }
    private static int findMinIdx(int[] arr){
        int minIdx = 0;
        for (int i = 0;i<arr.length;i++){
            if (arr[i]<arr[minIdx]) {
                minIdx = i;
            }
        }
        return minIdx;
    }
    private static boolean compareArr(int[] a, int[] b){
        if (a.length != b.length) return false;
        for (int i = 0;i<a.length;i++){
            if (a[i] != b[i]){
                return false;
            }            
        }
        return true;
    }    
    private static void swapEle(int[] a, int x, int y){        
        int tmp;
        tmp = a[x];
        a[x] = a[y];
        a[y] = tmp;        
    }
    private static int[] copyArr(int[] a){        
        int[] newArr = new int[a.length];
        for (int i = 0;i<a.length;i++){
            newArr[i] = a[i];
        }
        return newArr;

    }
}
