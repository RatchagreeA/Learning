import java.util.Scanner;
import java.io.File;
import java.io.PrintWriter;
public class CalculateGrade {
    public static void main(String[] args) {

        PrintWriter output = null;
        
        try {
            Scanner input = new Scanner(new File("Score.txt"));
            output = new PrintWriter(new File("ScoreResult.txt"));
            String nisit = "";
            String grade;
            while (input.hasNext()){
                nisit = input.nextLine();
                int pos = nisit.indexOf(" ");
                String name = nisit.substring(0, pos);
                String scoreStr = nisit.substring(pos, nisit.length());
                scoreStr = scoreStr.trim();
                double score = Double.parseDouble(scoreStr);
                if (score>=80){
                    grade = "A";
                }else if (score>=70){
                    grade =  "B";
                }else if (score>=60){
                    grade =  "C";
                }else if (score>=50){
                    grade =  "D";
                }else {
                    grade =  "F";
                }
                // System.out.println("Score : " + score + " Grade = "+ grade);
                // System.out.println(nisit + "    "+ grade);
                output.println(nisit + "    "+ grade);
            }

        } catch (Exception e){
            e.printStackTrace();
        }
        output.close();
    }
    
}
