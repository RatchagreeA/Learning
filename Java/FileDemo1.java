import java.io.*;
public class FileDemo1 {
    public static void main(String[] args) {
        File f = new File("FileDemo1.txt");
        try{
            FileWriter writer = new FileWriter(f);
            BufferedWriter bw = new BufferedWriter(writer);
            bw.write("Hello \n");
            bw.write("I am learning Java\n");
            bw.write("It's fun!");
            bw.close();
            print("Finish");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public static void print(String txt){
        System.out.println(txt);
    }
    
}
