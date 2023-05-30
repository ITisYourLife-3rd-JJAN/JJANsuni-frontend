import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { markThousand } from '../../lib/markThousand';

const QRCode = () => {
  const [qrCodeImage, setQRCodeImage] = useState('');
  const userId = sessionStorage.getItem('userId');
  const [balance, setBalance] = useState('');
  const [showBalance, setShowBalance] = useState(false);
  const username = sessionStorage.getItem('username');


  const getUser = () => {
    axios
      .get(`http://localhost:8080/api/v1/users/${userId}`)
      .then((response) => {
        console.log(response.data.data);
        setBalance(markThousand(response.data.data.balance));
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    const fetchQRCodeImage = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/debits/qr/${userId}`, {
          responseType: 'arraybuffer',
        });
        const qrCodeImageBlob = new Blob([response.data], { type: 'image/png' });
        const qrCodeImageUrl = URL.createObjectURL(qrCodeImageBlob);
        setQRCodeImage(qrCodeImageUrl);
      } catch (error) {
        console.error('짠페이 생성에 실패했습니다.:', error);
      }
    };
    getUser();
    fetchQRCodeImage();
  }, []);

  const handleMouseEnter = () => {
    setShowBalance(true);
  };

  const handleMouseLeave = () => {
    setShowBalance(false);
  };

  return (
    <div style={{ marginLeft: '1.5rem' }}>
      {qrCodeImage && (
        <div
          style={{ position: 'relative', display: 'inline-block' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img style={{ width: '90%' }} src={qrCodeImage} alt="QR Code" />
          {showBalance && (
            <div
              style={{
                position: 'absolute',
                left: '45%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                padding: '0.5rem',
                borderRadius: '4px',
                fontSize: '2rem'
              }}
            >
              {username}님<br/>{balance}원
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QRCode;