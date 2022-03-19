import java.util.Scanner;
public class YearCnv{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Year BE : ");
        int n = sc.nextInt();
        int result = n-543;
        System.out.println("Year AD = " + result);
    }
    
}
