import { useState, useEffect } from 'react';

interface GeolocationData {
    country: string;
    currency: string;
    currencySymbol: string;
    isLoading: boolean;
    error: string | null;
}

export const useGeolocation = (): GeolocationData => {
    const [geoData, setGeoData] = useState<GeolocationData>({
        country: 'US', // Default to US
        currency: 'USD',
        currencySymbol: '$',
        isLoading: true,
        error: null,
    });

    useEffect(() => {
        const fetchGeolocation = async () => {
            try {
                // Using ipapi.co for geolocation (free tier allows 1000 requests/day)
                const response = await fetch('https://ipapi.co/json/');
                
                if (!response.ok) {
                    throw new Error('Failed to fetch geolocation');
                }

                const data = await response.json();
                const countryCode = data.country_code;

                // Determine currency based on country
                let currency = 'USD';
                let currencySymbol = '$';

                if (countryCode === 'NG') {
                    currency = 'NGN';
                    currencySymbol = '₦';
                }

                setGeoData({
                    country: countryCode,
                    currency,
                    currencySymbol,
                    isLoading: false,
                    error: null,
                });
            } catch (error) {
                console.error('Geolocation error:', error);
                // Default to USD on error
                setGeoData({
                    country: 'US',
                    currency: 'USD',
                    currencySymbol: '$',
                    isLoading: false,
                    error: 'Failed to detect location',
                });
            }
        };

        fetchGeolocation();
    }, []);

    return geoData;
};
