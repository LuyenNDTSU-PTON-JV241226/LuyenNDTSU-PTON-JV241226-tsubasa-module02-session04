import './App.css'
import ToggleInfo from './ss04-2/ToggleInfo'
import CardUser from './ss4-1/CardUser';
import UserForm from './ss4-3/UserForm';
import CounText from './ss4-4/CounText';
import TodoApp from './ss4-5/TodoApp';
import RandomNumberGenerator from './ss4-6/RandomNumberGenerator ';

function App() {
  const users = [
    {
      name: 'Nguyễn Văn A',
      age: 21,
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Trần Thị B',
      age: 22,
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      name: 'Lê Văn C',
      age: 23,
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
  ];
  return (
    <>
     <ToggleInfo/>
     <div style={{ textAlign: 'center' }}>
      <h2>Danh sách người dùng</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {users.map((user, index) => (
          <CardUser
            key={index}
            name={user.name}
            age={user.age}
            avatar={user.avatar}
          />
        ))}
      </div>
    </div>
    <UserForm/>
    <CounText/>
    <RandomNumberGenerator/>
    <TodoApp/>
    </>
  )
}

export default App
