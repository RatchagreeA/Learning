public class ArrayBasic1 {
    public static void main(String[] args) {
        // int[] arr1 = new int[4];
        // arr1[0] = 10;
        // arr1[1] = 20;
        // arr1[2] = 30;
        // arr1[3] = 40;
        // System.out.println(arr1[2]);

        // int[] arr2 = {10,20,30,40};
        // for (int i = 0;i<arr2.length;i++){
        //     System.out.println(i + " : " + arr2[i]);
        // }        
        
        // String[] pet = {"dog", "cat", "bird"};
        // for (String data : pet){
        //     System.out.println(data);
        // }

        String[][] product = {
            {"table", "chair", "lamp"},
            {"keyboard", "mouse", "display"},
            {"soda", "water", "beer"}
        };
        System.out.println(product.length);
        for (int r = 0;r<product.length;r++){
            for (int c = 0;c<product[r].length;c++){
                System.out.println("[" + r + "][" + c + "] " + product[r][c]);
            }
        }
        
    }
    
}
