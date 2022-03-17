import java.util.Scanner;

public class MathOperator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Input 1 : ");
        int a = sc.nextInt();
        System.out.print("Input 2 : ");
        int b = sc.nextInt();

        System.out.println("Add = " + (a+b));
        System.out.println("Minus = " + (a-b));
        System.out.println("Multiply = " + (a*b));
        System.out.println("Divide = " + (a/b));
        System.out.println("Modulus = " + (a%b));

    }
}
