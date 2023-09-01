import Button from 'components/button';

export default function Home() {
  const handleClick = () => {
    console.log('aaaaaaaa');
  };
  return (
    <div>
      <div className="">
        <Button
          // type="danger"
          className="d-block"
          onClick={handleClick}
        >
          Im button
        </Button>
      </div>
    </div>
  );
}
