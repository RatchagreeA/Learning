public class Variable {
    public static void main(String[] args) {
        // declare without initial value
        int number1;
        boolean status;
        char alphabet;
        float  number2;
        double number3;

        // declare with initial value
        int number4 = 10;
        float number5 = 20.5f;
        double number6 = 1.5d;
        char alphabet2 = 'A';
        boolean status2 = true;
        
        // declare multiple variable in one line
        int a = 1, b = 2, c = 3;
        
        // declare constant (Can't assign value after declaration)
        final int NUM1 = 10;
        final int NUM2 = 20;

        System.out.println("NUM1 = " + NUM1);
        System.out.println("NUM2 = " + NUM2);
        System.out.println("number5 = " + number5);
        
        // global variable
        int x = 1;
        int y = 2;
        {
            // local variable
            int z = 3;
            System.out.println(a+z);
        }
        System.out.println(x);
        System.out.println(y);

        // max, min data type
        System.out.println("Min integer = " + Integer.MIN_VALUE);
        System.out.println("Max integer = " + Integer.MAX_VALUE);
        System.out.println("Min long = " + Long.MIN_VALUE);
        System.out.println("Max long  = " + Long.MAX_VALUE);
        System.out.println("Min float = " + Float.MIN_VALUE);
        System.out.println("Max float = " + Float.MAX_VALUE);
        System.out.println("Min double = " + Double.MIN_VALUE);
        System.out.println("Max double = " + Double.MAX_VALUE);
   
        // type casting
        /* 
        byte : 1
        short : 2
        int : 4
        long : 8
        float : 4
        double : 8
        boolean : 1
        char : 2
        */
        // 1.Widening Casting (Big -> Small)
        // byte -> short -> char -> int -> lomg -> float -> double
        int numInt1 = 10;
        double numDouble1 = numInt1;
        System.out.println("Int -> Double : " + numDouble1);


        // 2.Narrowing Casting (Small -> Big)
        // double -> float -> long -> int -> char -> short -> byte
        double numDouble2 = 10.0d;
        int numInt2 = (int)numDouble2;
        System.out.println("Double -> Int : " + numInt2);

        // char
        char c1 = 'a';
        // string
        String s1 = "100", s2 = "200";
        int n1;
        // string to int
        n1 = Integer.parseInt(s1);
        n1 = n1 + 50;
        System.out.println(n1);

        // string to double
        double n2;
        n2 = Double.parseDouble(s1);
        n2 = n2 + 9.9;
        System.out.println(n2);

        // Interger to string
        int num1 = 100;
        String s3 = String.valueOf(num1);
        System.out.println(s3);

        //  data type
        Integer i1 = 10;
        Double i2;
        String i3 = "ABCD";
        Boolean i4;
        Character i5;
        Float i6;
        
        boolean result1 = i3 instanceof String;
        System.out.println(result1);
        boolean result2 = i1.toString() instanceof String;
        System.out.println(result2);

    }   
}
