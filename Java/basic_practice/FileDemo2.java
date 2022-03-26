import java.io.*;
public class FileDemo2 {
    public static void main(String[] args) {
        File f = new File("FileDemo1.txt");
        try{
            FileReader reader = new FileReader(f);
            BufferedReader br = new BufferedReader(reader);
            String msg;
            while ( (msg = br.readLine()) != null){
                // System.out.printf("%s\n",msg);
                System.out.println(msg);
            }
            print("Finish");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public static void print(String txt){
        System.out.println(txt);
    }
    
    
}
