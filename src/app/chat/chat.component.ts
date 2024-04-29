import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone:true,
  imports:[CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  message: string = '';
  chatHistory: any[] = []; // Array to store chat messages

  @ViewChild('chatWindow', { static: false }) chatWindow: any;

  sendMessage() {
    // Implement logic to send the message (this.message) to the server
    console.log("Sending message:", this.message);

    // // Example: Simulate sending message to server and receiving a response
    // const response = { sender: 'John Doe', content: 'This is a reply from John Doe.' };
    // this.addMessage('You', this.message); // Add your sent message
    // this.addMessage(response.sender, response.content); // Add received reply

    // Clear message input after sending
    this.message = '';

    // Scroll down the chat window after adding new messages
    // this.chatWindow.nativeElement.scrollTop = this.chatWindow.nativeElement.scrollHeight;
  }

  addMessage(sender: string, content: string) {
    const message = { sender, content };
    this.chatHistory.push(message); // Add message to chat history
  }

  // Function to scroll down the chat window automatically
  scrollToBottom() {
    this.chatWindow.nativeElement.scrollTop = this.chatWindow.nativeElement.scrollHeight;
  }

  ngOnInit() {
    // Example: Simulate initial chat history (replace with actual data fetching)
    this.addMessage('John Doe', 'Hi there!');
    this.addMessage('You', 'Hello!');
    this.scrollToBottom(); // Scroll down initially
  }
}
