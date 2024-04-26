namespace API;
using Microsoft.Data.Sqlite;

public class DatabaseHelper
{
    private readonly string _connectionString;

    public DatabaseHelper(string connectionString)
    {
        _connectionString = connectionString;
    }

    public bool TestConnection()
    {
        using (var connection = new SqliteConnection(_connectionString))
        {
            try
            {
                connection.Open();
                using (var command = connection.CreateCommand())
                {
                    command.CommandText = "SELECT Id, UserName FROM Users";
                    var result = command.ExecuteScalar();
                    // If result is not null, the connection is successful
                    return result != null;
                }
            }
            catch (SqliteException ex)
            {
                // Handle connection errors
                Console.WriteLine($"Error: {ex.Message}");
                return false;
            }
        }
    }
}

class Program
{
    static void Main(string[] args)
    {
        // SQLite connection string
        string connectionString = "Data Source=datingapp.db";

        // Create an instance of the DatabaseHelper class
        var dbHelper = new DatabaseHelper(connectionString);

        // Test the database connection
        bool isConnected = dbHelper.TestConnection();

        if (isConnected)
        {
            Console.WriteLine("Database connection successful.");
        }
        else
        {
            Console.WriteLine("Failed to connect to the database.");
        }
    }
}
