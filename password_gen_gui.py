import string
import random
import tkinter as tk

# Function to generate random password
def generate_password():
    password_length = int(length_input.get())
    letters = string.ascii_letters
    digits = string.digits
    punctuation = string.punctuation.replace("'", "")
    all_chars = letters + digits + punctuation
    password = ''.join(random.choice(all_chars) for i in range(password_length))
    password_output.config(state='normal')
    password_output.delete(0, tk.END)
    password_output.insert(0, password)
    password_output.config(state='readonly')

# Create GUI window
window = tk.Tk()
window.title("Password Generator")
window.geometry("350x200")
window.resizable(False, False)

# Create label and input for password length
length_label = tk.Label(window, text="Password Length:")
length_label.grid(row=0, column=0, padx=10, pady=10, sticky='w')
length_input = tk.Entry(window, width=10)
length_input.grid(row=0, column=1, padx=10, pady=10, sticky='w')

# Create button to generate password
generate_button = tk.Button(window, text="Generate Password", command=generate_password, bg='#4CAF50', fg='white', font=('Arial', 12, 'bold'))
generate_button.grid(row=1, column=0, columnspan=2, padx=10, pady=10)

# Create label and output for generated password
password_label = tk.Label(window, text="Generated Password:")
password_label.grid(row=2, column=0, padx=10, pady=10, sticky='w')
password_output = tk.Entry(window, width=25, state='readonly')
password_output.grid(row=2, column=1, padx=10, pady=10, sticky='w')

# Start GUI loop
window.mainloop()
