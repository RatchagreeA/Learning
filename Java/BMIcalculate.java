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
        System.out.println("BMI = " + bmi);

        String predict;
        if (bmi<18.5){
            predict = "Underweight";
        }else if (bmi>=18.5 && bmi < 25) {
            predict = "Healthy Weight";
        }else if (bmi>=25 && bmi < 30){
            predict = "Overweight";
        }else if (bmi>=30 && bmi < 35){
            predict = "Obese";
        }else if (bmi>=35 && bmi < 40){
            predict = "Severely Obese";
        }else if (bmi>=40){
            predict = "Morbidly Obese";
        }else{
            predict = "out of range";
        }
        System.out.println("Check result = " + predict);
        /*
        Underweight    : < 18.5
        Healthy Weight : 18.5 - 24.9
        Overweight     : 25 - 29.9
        Obese          : 30 - 34.9
        Severely Obese : 35 - 39.9
        Morbidly Obese : >= 40
        */



    }
    
}
