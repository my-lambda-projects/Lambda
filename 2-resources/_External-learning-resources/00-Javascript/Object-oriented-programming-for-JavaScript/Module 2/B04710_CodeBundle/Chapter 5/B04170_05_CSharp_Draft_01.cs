public interface IComicCharacter
{
    string NickName { get; set; }
    void DrawSpeechBalloon(string message);
    void DrawSpeechBalloon(IComicCharacter destination, string message);
    void DrawThoughtBalloon(string message);
}



public interface IGameCharacter
{
    string FullName { get; set; }
    uint Score { get; set; }
    uint X { get; set; }
    uint Y { get; set; }
    void Draw(uint x, uint y);
    void Move(uint x, uint y);
    bool IsIntersectingWith(IGameCharacter otherCharacter);
}



public interface IAlien
{
    int NumberOfEyes { get; set; }
    void Appear();
    void Disappear();
}



public interface IKnight
{
    int SwordPower { get; set; }
    int SwordWeight { get; set; }
    void UnsheathSword();
}



public interface IKnight
{
    int SwordPower { get; set; }
    int SwordWeight { get; set; }
    void UnsheathSword();
    void UnsheathSword(IAlien target);
}



public class AngryDog : IComicCharacter
{
    public string NickName { get; set; }
        
    public AngryDog(string nickName)
    {
        this.NickName = nickName;
    }

    protected void Speak(string message)
    {
        Console.WriteLine("{0} -> \"{1}\"", this.NickName, message);
    }

    protected void Think(string message)
    {
        Console.WriteLine("{0} -> ***{1}***", this.NickName, message);
    }

    public void DrawSpeechBalloon(string message)
    {
        Speak(message);
    }
        
    public void DrawSpeechBalloon(IComicCharacter destination, string message)
    {
        Speak(String.Format("{0}, {1}", destination.NickName, message));
    }

    public void DrawThoughtBalloon(string message)
    {
        Think(message);
    }
}



public class AngryCat : IComicCharacter
{
    public string NickName { get; set; }
    public int Age { get; set; }

    public AngryCat(string nickName, int age)
    {
        this.NickName = nickName;
        this.Age = age;
    }

    public void DrawSpeechBalloon(string message)
    {
        if (this.Age > 5)
        {
            Console.WriteLine("{0} -> \"Meow {1}\"", this.NickName, message);
        }
        else
        {
            Console.WriteLine("{0} -> \"Meeeooow Meeeooow {1}\"", this.NickName, message);
        }
    }

    public void DrawSpeechBalloon(IComicCharacter destination, string message)
    {
        Console.WriteLine("{0} === {1} ---> \"{2}\"", destination.NickName, this.NickName, message);
    }

    public void DrawThoughtBalloon(string message)
    {
        Console.WriteLine("{0} thinks: {1}", this.NickName, message);
    }
}



public class AngryCat : IComicCharacter
{
	//public string NickName { get; set; }
    public int Age { get; set; }

    public AngryCat(string nickName, int age)
    {
        this.NickName = nickName;
        this.Age = age;
    }

    public void DrawSpeechBalloon(string message)
    {
        if (this.Age > 5)
        {
            Console.WriteLine("{0} -> \"Meow {1}\"", this.NickName, message);
        }
        else
        {
            Console.WriteLine("{0} -> \"Meeeooow Meeeooow {1}\"", this.NickName, message);
        }
    }

    public void DrawSpeechBalloon(IComicCharacter destination, string message)
    {
        Console.WriteLine("{0} === {1} ---> \"{2}\"", destination.NickName, this.NickName, message);
    }

    public void DrawThoughtBalloon(string message)
    {
        Console.WriteLine("{0} thinks: {1}", this.NickName, message);
    }
}



public class AngryCat : IComicCharacter
{
	public string NickName { get; set; }
    public int Age { get; set; }

    public AngryCat(string nickName, int age)
    {
        this.NickName = nickName;
        this.Age = age;
    }

    public void DrawSpeechBalloon(string message)
    {
        if (this.Age > 5)
        {
            Console.WriteLine("{0} -> \"Meow {1}\"", this.NickName, message);
        }
        else
        {
            Console.WriteLine("{0} -> \"Meeeooow Meeeooow {1}\"", this.NickName, message);
        }
    }

    public void DrawSpeechBalloon(IComicCharacter destination, string message)
    {
        Console.WriteLine("{0} === {1} ---> \"{2}\"", destination.NickName, this.NickName, message);
    }

    public void DrawThoughtBalloon(string message)
    {
        Console.WriteLine("{0} thinks: {1}", this.NickName, message);
    }
}



public class AngryCat : IComicCharacter, IGameCharacter
{
    public string NickName { get; set; }
    public int Age { get; set; }

    public AngryCat(string nickName, int age, string fullName, uint initialScore, uint x, uint y)
    {
        this.NickName = nickName;
        this.Age = age;
        this.FullName = fullName;
        this.Score = initialScore;
        this.X = x;
        this.Y = y;
    }

    public void DrawSpeechBalloon(string message)
    {
        if (this.Age > 5)
        {
            Console.WriteLine("{0} -> \"Meow {1}\"", this.NickName, message);
        }
        else
        {
            Console.WriteLine("{0} -> \"Meeeooow Meeeooow {1}\"", this.NickName, message);
        }
    }

    public void DrawSpeechBalloon(IComicCharacter destination, string message)
    {
        Console.WriteLine("{0} === {1} ---> \"{2}\"", destination.NickName, this.NickName, message);
    }

    public void DrawThoughtBalloon(string message)
    {
        Console.WriteLine("{0} thinks: {1}", this.NickName, message);
    }

    public uint Score { get; set; }
    public string FullName { get; set; }
    public uint X { get; set; }
    public uint Y { get; set; }

	public void Draw(uint x, uint y)
	{
		X = x;
		Y = y;
		Console.WriteLine("Drawing AngryCat {0} at x: {1}, y: {2}", this.FullName, x, y);
	}

	public void Move(uint x, uint y)
	{
		X = x;
		Y = y;
		Console.WriteLine("Moving AngryCat {0} to x: {1}, y: {2}", this.FullName, x, y);
	}
		
	public bool IsIntersectingWith(IGameCharacter otherCharacter)
	{
		return (this.X == otherCharacter.X) && (this.Y == otherCharacter.Y);
	}
}



public class AngryCatAlien : AngryCat, IAlien
{
    public int NumberOfEyes { get; set; }

    public AngryCatAlien(string nickName, int age, string fullName, uint initialScore, uint x, uint y, int numberOfEyes)
        : base(nickName, age, fullName, initialScore, x, y)
    {
        this.NumberOfEyes = numberOfEyes;
    }

    public void Appear()
    {
        Console.WriteLine("I'm {0} and you can see my {1} eyes.", this.FullName, this.NumberOfEyes);
    }

    public void Disappear()
    {
        Console.WriteLine("{0} disappears.", this.FullName);
    }
}



public class AngryCatWizard : AngryCat, IWizard
{
    public int SpellPower { get; set; }

    public AngryCatWizard(string nickName, int age, string fullName, uint initialScore, uint x, uint y, int spellPower)
        : base(nickName, age, fullName, initialScore, x, y)
    {
        this.SpellPower = spellPower;
    }

    public void DisappearAlien(IAlien alien)
    {
        Console.WriteLine(
            "{0} uses his {1} spell power to make the alien with {2} eyes disappear.",
            this.FullName,
            this.SpellPower,
            alien.NumberOfEyes);
    }
}



public class AngryCatKnight : AngryCat, IKnight
{
    public int SwordPower { get; set; }
    public int SwordWeight { get; set; }

    public AngryCatKnight(
        string nickName, int age, string fullName, 
        uint initialScore, uint x, uint y, 
        int swordPower, int swordWeight)
        : base(nickName, age, fullName, initialScore, x, y)
    {
        this.SwordPower = swordPower;
        this.SwordWeight = swordWeight;
    }

    private void WriteLinesAboutTheSword()
    {
        Console.WriteLine(
            "{0} unsheaths his sword.",
            this.FullName);
        Console.WriteLine(
            "Sword power: {0}. Sword Weight: {1}.",
            this.SwordPower,
            this.SwordWeight);
    }

    public void UnsheathSword() 
    {
        this.WriteLinesAboutTheSword();
    }
        
    public void UnsheathSword(IAlien target)
    {
        this.WriteLinesAboutTheSword();
        Console.WriteLine(
            "The sword targets an alien with {0} eyes.",
            target.NumberOfEyes);
    }
}



