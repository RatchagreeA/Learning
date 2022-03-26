import java.util.Scanner;

public class TempCnv {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // System.out.print("Temp farenheit : ");
        // float temp = sc.nextFloat();
        // float new_temp = (temp-32)*5/9;
        // System.out.print("Temp celcius = " + new_temp);

        System.out.print("Temp celcius : ");
        float temp = sc.nextFloat();
        float new_temp = (temp*9/5)+32;
        System.out.print("Temp farenheit = " + new_temp);
    }
    
}
