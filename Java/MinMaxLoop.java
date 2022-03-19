import java.util.Scanner;

public class MinMaxLoop {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int maxN=Integer.MIN_VALUE,minN=Integer.MAX_VALUE,n;
        while (true){
            System.out.print("Input num : ");
            n = sc.nextInt();
            if (n<0) break;
            maxN = (n>maxN) ? n : maxN;
            minN = (n<minN) ? n : minN;
        }
        System.out.println("Max : " + maxN);
        System.out.println("Min : " + minN);
    }
    
}
