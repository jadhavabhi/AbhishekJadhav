/**
 * Created by Abhishek on 2/7/2017.
 */
class ABC
{
    public static void main(String[] args)
    {
        System.out.println("IN ABC");
    }
}
public class Maindemo extends ABC {
	{System.out.println("IN");}
	static{
			System.out.println("IN static");
	}

	 public static void main(String[] args)
    {
        System.out.println("IN Maindemo");
		Maindemo m=new Maindemo();
    }
}
