import java.util.Scanner;
public class BMIcalculate {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Weight (kg) = ");
        double weight = sc.nextDouble();
        System.out.print("Height (cm) = ");
        double height = sc.nextDouble();
        height/=100;
        double bmi = weight/(height*height);
        System.out.print("BMI = " + bmi);

    }
    
}
