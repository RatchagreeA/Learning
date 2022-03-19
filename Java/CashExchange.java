import java.util.Scanner;

public class CashExchange {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Input cash : ");
        int money = sc.nextInt();

        if (money>=1000){
            System.out.println("1000 : " + (money/1000));
            money%=1000;
        }
        if (money>=500){
            System.out.println("500 : " + (money/500));
            money%=500;
        }
        if (money>=100){
            System.out.println("100 : " + (money/100));
            money%=100;
        }
        if (money>=50){
            System.out.println("50 : " + (money/50));
            money%=50;
        }
        if (money>=20){
            System.out.println("20 : " + (money/20));
            money%=20;
        }
        System.out.println("Excess : " + money);
    }
    
}
