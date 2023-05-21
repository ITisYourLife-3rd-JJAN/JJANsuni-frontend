import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QRCode = ({ userId }) => {
  const [qrCodeImage, setQRCodeImage] = useState('');

  useEffect(() => {
    const fetchQRCodeImage = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/debits/qr/1`, {
          responseType: 'arraybuffer',
        });
        const qrCodeImageBlob = new Blob([response.data], { type: 'image/png' });
        const qrCodeImageUrl = URL.createObjectURL(qrCodeImageBlob);
        setQRCodeImage(qrCodeImageUrl);
      } catch (error) {
        console.error('짠페이 생성에 실패했습니다.:', error);
      }
    };

    fetchQRCodeImage();
  }, [userId]);

  return (
    <div style={{marginLeft:'1.5rem'}}>
      {qrCodeImage && <img style={{width: '90%'}} src={qrCodeImage} alt="QR Code" />}
    </div>
  );
};

export default QRCode;
