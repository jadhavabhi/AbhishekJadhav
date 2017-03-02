package net.codejava.jdbc;
 
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;
 
/**
 * This program demonstrates how to make database connection with Oracle
 * database server.
 * @author www.codejava.net
 *
 */
public class JdbcOracleConnection {
 
    public static void main(String[] args) {
 
        Connection conn1 = null;
        Connection conn2 = null;
  
        try {
            // registers Oracle JDBC driver - though this is no longer required
            // since JDBC 4.0, but added here for backward compatibility
            Class.forName("oracle.jdbc.OracleDriver");
 
            // METHOD #1
            String dbURL1 = "jdbc:oracle:thin:abhishek/system@localhost:1521:orcl1";
            conn1 = DriverManager.getConnection(dbURL1);
            if (conn1 != null) {
                System.out.println("Connected with connection #1");
            }
 
            // METHOD #2
            String dbURL2 = "jdbc:oracle:thin:@localhost:1521:orcl1";
            String username = "abhishek";
            String password = "system";
            conn2 = DriverManager.getConnection(dbURL2, username, password);
            if (conn2 != null) {
                System.out.println("Connected with connection #2");
            }
 
        } catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        } catch (SQLException ex) {
            ex.printStackTrace();
        } finally {
            try {
                if (conn1 != null && !conn1.isClosed()) {
                    conn1.close();
                }
                if (conn2 != null && !conn2.isClosed()) {
                    conn2.close();
                }
                         } catch (SQLException ex) {
                ex.printStackTrace();
            }
        }
    }
}