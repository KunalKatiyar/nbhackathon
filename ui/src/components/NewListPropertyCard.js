/* eslint-disable no-undef */

/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

const NewListPropertyCard = (props) => {
	// const {
	// 	propertyType,
	// 	propertyItemIndex,
	// 	openSignupModal,
	// 	userInfo,
	// 	property,
	// 	isMobile,
	// 	contactedNotVerifiedIdsForListPage,
	// 	contactOwnerPlanPageStatus,
	// 	contactedIdsForListPage,
	// 	openChat,
	// 	gaService,
	// 	setPropertyId,
	// 	openContactOwner,
	// 	setContactOwnerClick,
	// 	setContactClickId,
	// 	isShortlistPage,
	// 	shortlistPropertyRequest,
	// 	requestPhotosRequest,
	// 	impressionIds,
	// 	removeImpressionId,
	// 	getContactedInfoRequest,
	// 	isContactOwnerClicked,
	// } = props;

	// const imageBaseUrl = 'https://images.nobroker.in/images';
	// const lowercasePropertype = property?.propertyType?.toLowerCase();
	// const eventParam = property && getEventParamsListPage(property);
	// const { listingNudge } = property;
	// const nudgeToShow = listingNudge ? getNudgeDetails(property?.listingNudge, true) : null;
	// const isPremiumNudge = nudgeToShow?.isPremiumListing;

	// const shortlist = (isMarked) => {
	// 	if (!isMarked && userInfo && userInfo.isLoggedIn === true) {
	// 		if (property && !property?.sponsored) {
	// 			const builderLeadData = {
	// 				userId: userInfo?.id,
	// 				source: 'SHORTLISTED_BY',
	// 				propertyType: property?.propertyType,
	// 				propertyId: property?.id,
	// 			};

	// 			addBuilderLead(builderLeadData);
	// 		}
	// 	}
	// 	if (isShortlistPage) {
	// 		nbGaEvent('ShortlistPage', `unshortlist-${property?.propertyType?.toLowerCase()}`);
	// 	} else {
	// 		nbGaEvent(
	// 			'ShortList',
	// 			isMarked
	// 				? `grid-remove-${property?.propertyType?.toLowerCase()}`
	// 				: `grid-add-${property?.propertyType?.toLowerCase()}`
	// 		);
	// 	}
	// 	shortlistPropertyRequest({
	// 		propertyId: property.id,
	// 		nbfr: `grid-${property?.propertyType === 'BUY' ? 'resale' : property?.propertyType?.toLowerCase()}`,
	// 		mark: isMarked,
	// 		...(property?.spotLight && { sptl: property?.spt_impressions }),
	// 	});
	// 	if (!isShortlistClicked) {
	// 		setIsShortlistClicked(true);
	// 		setIsShortlist(!property?.shortlistedByLoggedInUser);
	// 	} else {
	// 		setIsShortlist(!isShortlist);
	// 	}
	// };

	// const shortlistProperty = (event) => {
	// 	if (event) {
	// 		event.stopPropagation();
	// 		event.preventDefault();
	// 	}
	// 	const signUpEventParams = generateSignUpParams(property);
	// 	nbCache.set('leaveIntentStatus', { status: false });
	// 	if (userInfo && userInfo.isLoggedIn) {
	// 		// if (!userInteracted && !isShortlistPage) showSimilarProperties();
	// 		if (isShortlistClicked) {
	// 			if (isShortlist) {
	// 				shortlist(true);
	// 			} else {
	// 				shortlist(false);
	// 			}
	// 		} else if (property?.shortlistedByLoggedInUser) {
	// 			shortlist(true);
	// 		} else {
	// 			shortlist(false);
	// 		}
	// 	} else {
	// 		if (typeof localStorage !== 'undefined') localStorage.setItem('service', 'ld_search_shortlist_list_grid');
	// 		nbGaEvent('user_signup', 'signup_popup', signUpEventParams);
	// 		openSignupModal('shortlist', () => shortlist(true), '');
	// 	}
	// };
	// const openContactOwnerModal = (event, service) => {
	// 	if (gaService) {
	// 		service = gaService;
	// 	}
	// 	if (service === 'contact_popup_similar') {
	// 		service = 'contact_popup_similar_grid';
	// 	}
	// 	nbGaEvent('ContactOwner', `contact_owner_attempted`, getEventParamsListPage(property, service || 'list_grid'));
	// 	if (event) {
	// 		event.stopPropagation();
	// 		event.preventDefault();
	// 	}

	// 	// setRequestedContactOwner(true);
	// 	nbCache.set('leaveIntentStatus', { status: false });
	// 	setPropertyId(property.id);
	// 	const propertyInfo = {
	// 		propertyID: property.id,
	// 		propertyBHK: property.type,
	// 		propertyLink: property.detailUrl,
	// 		propertyTitle: property.propertyTitle,
	// 		propertyprice: property.minRent,
	// 		propertycity: property.city,
	// 		propertySize: property.propertySize,
	// 		propertylocality: property.locality,
	// 		propertyfurnishing: property.furnishing,
	// 		propertyType: property.propertyType,
	// 		sharedAccomodation: property.sharedAccomodation,
	// 		propertyItemIndex,
	// 		sptl: property?.spt_impressions,
	// 	};
	// 	const { active } = property;
	// 	const product = `ev_Contactowner-${property.propertyType.toLowerCase()}`;
	// 	adobeMediaOptimiser.logEvent(product);
	// 	nbGaEvent('ContactOwner', `gridpage_contact_owner_${lowercasePropertype}`, eventParam);
	// 	getNBFRContext('default', getListPageNbfrValue(property?.propertyType), window?.location?.search);
	// 	let contextPayload = {};
	// 	if (userInfo && userInfo.isLoggedIn) {
	// 		if (
	// 			active &&
	// 			(COMETCHAT_ENABLED ||
	// 				userInfo?.id === 'ff8081816a223808016a224086fb0123' ||
	// 				userInfo?.id === 'ff80818161a628da0161a799802e435f')
	// 		) {
	// 			const { detailUrl, propertyTitle, title, type, photos } = property;
	// 			const { countryCode = '', email, id, name, phone } = userInfo;
	// 			const tenantData = {
	// 				contact: {
	// 					email,
	// 					id,
	// 					name,
	// 					phone: countryCode ? `${countryCode}-${phone}` : phone,
	// 				},
	// 				params: {
	// 					userType: 'TENANT',
	// 				},
	// 			};
	// 			contextPayload = {
	// 				participants: [tenantData],
	// 				titleCard: {
	// 					buttonUrl: detailUrl,
	// 					image:
	// 						photos.length > 0
	// 							? `${imageBaseUrl}/${property.id}/${photos[0]?.imagesMap?.thumbnail}`
	// 							: 'https://assets.nobroker.in/static/img/534_notxt.jpg',
	// 					title: propertyTitle || title,
	// 					buttonText: 'VIEW DETAIL',
	// 				},
	// 				business: {
	// 					name: 'nb',
	// 					context: `${property?.id}_${id}`,
	// 					params: {
	// 						propertyType,
	// 						type,
	// 						propertId: property?.id,
	// 						groupCreatedFromCometChat: true,
	// 						tenantDetails: {
	// 							name,
	// 							id,
	// 						},
	// 					},
	// 				},
	// 			};
	// 		}
	// 		openContactOwner({
	// 			pageType: 'listPage',
	// 			propertyInfo,
	// 			contextPayload,
	// 			openChatDirectly: ['Owner Is Live', 'Seller Is Live'].includes(property?.listingNudge),
	// 			service: service || 'list_grid',
	// 			propDetails: property,
	// 		});
	// 		if (!isShortlistPage) {
	// 			setGaForContactOwner(true);
	// 		} else {
	// 			nbGaEvent('ShortlistPage', `ContactOwner-UserLoggedIn-${lowercasePropertype}`);
	// 		}
	// 	} else {
	// 		const signUpEventParams = generateSignUpParams(property);
	// 		nbGaEvent('user_signup', 'signup_popup', signUpEventParams);
	// 		nbGaEvent('ContactOwner', `signup_grid_contact_${lowercasePropertype}`, eventParam);
	// 		nbGaEvent('ContactOwner', `contact_owner_login`, getEventParamsListPage(property, service || 'list_grid'));
	// 		if (typeof localStorage !== 'undefined') localStorage.setItem('service', 'ld_search_owner_contact_list_grid');
	// 		openSignupModal(
	// 			'ownerDetails',
	// 			() =>
	// 				setTimeout(() => {
	// 					openContactOwner({
	// 						pageType: 'listPage',
	// 						propertyInfo,
	// 						contextPayload,
	// 						openChatDirectly: ['Owner Is Live', 'Seller Is Live'].includes(property?.listingNudge),
	// 						service: service || 'list_grid',
	// 						propDetails: property,
	// 					});
	// 					if (!isShortlistPage) {
	// 						setGaForContactOwner(true);
	// 					}
	// 				}, 100),
	// 			''
	// 		);
	// 		setContactOwnerClick(false);
	// 	}
	// };

	// const contactOwnerClick = (event) => {
	// 	if (event) {
	// 		event.stopPropagation();
	// 		event.preventDefault();
	// 	}
	// 	if (
	// 		userInfo?.isLoggedIn &&
	// 		contactedIdsForListPage?.includes(property?.id) &&
	// 		['Owner Is Live', 'Seller Is Live'].includes(property?.listingNudge)
	// 	) {
	// 		const propertyInfo = {
	// 			propertyID: property.id,
	// 			propertyLink: property.detailUrl,
	// 			propertyTitle: property.propertyTitle,
	// 			propertyType: property.propertyType,
	// 		};
	// 		const { countryCode = '', email, id, name, phone } = userInfo;
	// 		const tenantData = {
	// 			contact: {
	// 				email,
	// 				id,
	// 				name,
	// 				phone: countryCode ? `${countryCode}-${phone}` : phone,
	// 			},
	// 			params: {
	// 				userType: 'TENANT',
	// 			},
	// 		};
	// 		const contextPayload = {
	// 			participants: [tenantData],
	// 			titleCard: {
	// 				buttonUrl: property?.detailUrl,
	// 				image:
	// 					property?.photos?.length > 0
	// 						? `${imageBaseUrl}/${property.id}/${property?.photos[0]?.imagesMap?.thumbnail}`
	// 						: 'https://assets.nobroker.in/static/img/534_notxt.jpg',
	// 				title: property?.propertyTitle,
	// 				buttonText: 'VIEW DETAIL',
	// 			},
	// 			business: {
	// 				name: 'nb',
	// 				context: `${property?.id}_${id}`,
	// 				params: {
	// 					propertyType: property?.propertyType,
	// 					type: property?.type,
	// 					propertId: property?.id,
	// 					groupCreatedFromCometChat: true,
	// 					tenantDetails: {
	// 						name,
	// 						id,
	// 					},
	// 				},
	// 			},
	// 		};
	// 		nbGaEvent('messageOwner', `open_chat_grid_${lowercasePropertype}`, eventParam);
	// 		getContactedInfoRequest({
	// 			propertyId: property?.id,
	// 			callback: (cc) =>
	// 				openContactOwner({
	// 					updatedContactedData: cc,
	// 					pageType: 'listPage',
	// 					propertyInfo,
	// 					alreadyContacted: true,
	// 					contextPayload,
	// 					openChatDirectly: true,
	// 				}),
	// 		});
	// 	} else if (!isContactOwnerClicked) {
	// 		setContactOwnerClick(true);
	// 		setContactClickId(property.id);
	// 		openContactOwnerModal(event);
	// 	}
	// };

	// const getFormatedPropertyValue = (item) => {
	// 	const value =
	// 		propertyType === 'rent' || propertyType === 'shared'
	// 			? item.forLease
	// 				? 'Deposit Only'
	// 				: convertCurrency(item.rent)
	// 			: propertyType === 'pg'
	// 			? convertCurrency(item.minRent)
	// 			: propertyType === 'commercial_buy'
	// 			? convertCurrency(item.price)
	// 			: propertyType === 'sale'
	// 			? convertCurrency(item.price)
	// 			: propertyType === 'plot'
	// 			? convertCurrency(item?.price)
	// 			: convertCurrency(item.rent);
	// 	return item.forLease ? `${value}` : `₹${value}${propertyType === 'pg' ? '+' : ''}`;
	// };

	// const incrementImageIndex = () => {
	// 	const lastIndex = property.photos.length - 1;
	// 	setCurrentImageIndex((currImageIndex) => (currImageIndex === lastIndex ? 0 : currImageIndex + 1));
	// };

	// const startImageNavigation = () => {
	// 	const intervalTimer = setInterval(() => {
	// 		incrementImageIndex();
	// 	}, 1800);
	// 	setTimer(intervalTimer);
	// };

	// const stopImageNavigation = (callback) => {
	// 	const interval = clearInterval(timer);
	// 	setTimer(interval);
	// 	if (callback) callback();
	// };

	// const getFurnishingType = (funishingType) => {
	// 	if (funishingType === 'FULLY_FURNISHED') {
	// 		return 'Fully Furnished';
	// 	}
	// 	if (funishingType === 'SEMI_FURNISHED') {
	// 		return 'Semi Furnished';
	// 	}
	// 	if (funishingType === 'NOT_FURNISHED') {
	// 		return 'Unfurnished';
	// 	}
	// 	return 'Not Available';
	// };
	// const requestPhotos = (event) => {
	// 	if (event) {
	// 		event.stopPropagation();
	// 		event.preventDefault();
	// 	}
	// 	if (userInfo && userInfo.isLoggedIn) {
	// 		requestPhotosRequest({ propertyId: property.id });
	// 		setRequestForPhotos('Photos Requested');

	// 		nbGaEvent('grid_view_requestPhotos', `grid-view-request-photos-${lowercasePropertype}`);
	// 	} else {
	// 		openSignupModal(
	// 			'requestPhotos',
	// 			() => {
	// 				requestPhotosRequest({ propertyId: property.id });
	// 				setRequestForPhotos('Photos Requested');
	// 			},
	// 			''
	// 		);
	// 	}
	// };

	var property = {
		"propertyTitle": "2 BHK Flat  For Rent  In  Ss Residency  In Sector 1 Extension,  ",
		"propertySubTitle": "Sector 1 Extension,  ",
		"propertyType": "Multistorey Apartment",
		"propertyId": "615a2a7a6f2b0f7d2c3a0b3a",
		"listingCategory": "rent",
		"propertyUrl": "2-bhk-flat-for-rent-in-ss-residency-in-sector-1-extension-sector-1-extension-bangalore-for-rs-20000/615a2a7a6f2b0f7d2c3a0b3a",
		"propertyAge": 0,
		"propertySize": "1,200 sqft",
		"propertySizeUnit": "sqft",
		"propertyPrice": 20000,
		"propertyPriceUnit": "INR",
		"propertyPricePerUnit": 17
	};
	var propertyType = "sale";



	return (
		<div
			id={property?.id}
			onClick={() => {
				nbGaEvent('grid_view', `property_open_${propertyType}`);
				window.open(`${property?.detailUrl}?nbFr=grid_view_${propertyType}`, '_blank');
			}}
		>
			<div className='relative w-full'>
				(
					<div className='flex justify-center rounded-lg' style={{ backgroundColor: '#E5E7EB' }}>
						<img
							className='mb-1.5 cursor-pointer w-50pe'
							src="images/card1.png"
							alt='noProperty'
							style={{ height: '265px' }}
						/>
					</div>
				)
			</div>
			<div
				style={{
					top: '-5px',
					width: '100%',
				}}
				className='flex flex-col bg-white p-1p  mb-0 z-1 relative rounded-b-lg'
			>
				<div className='h-full border-solid border-card-border-dark z-1 relative'>
					<div
						style={{ width: '63%' }}
						className='relative flex items-center text-14 font-semibold text-card-title truncate'
					>
						<a
							href={`${property?.detailUrl}?nbFr=grid_view_${propertyType}`}
							className='w-full truncate cursor-pointer'
						>
							{propertyType}
						</a>
					</div>

					{(
						<div className='pt-1p'>
							<div
								className={`flex items-center ${
									propertyType === 'rent' || propertyType === 'shared' ? 'justify-between' : ''
								}`}
							>
								<div
									className={`flex items-center ${
										propertyType === 'rent' || propertyType === 'shared' ? '' : 'mr-1.2p'
									}`}
								>
									{/* <img src={sqFt} alt={'SqFt'} className='h-1.4p w-1.4p ' /> */}
									<span
										title={
											propertyType === 'pg'
												? property.minDeposit
												: propertyType === 'rent' || propertyType === 'sale' || propertyType === 'shared'
												? `${addingCommasToNumber(property.propertySize)} Sq.Ft.`
												: propertyType === 'plot'
												? `${addingCommasToNumber(property.plotArea)} sq.ft.`
												: `${property.carpetArea} Sq.Ft.`
										}
										className='text-12 px-0.2p text-gray-lightest'
									>
										<span className='font-semibold'>
											{propertyType === 'pg'
												? property.minDeposit
												: propertyType === 'rent' || propertyType === 'sale' || propertyType === 'shared'
												? `${addingCommasToNumber(property.propertySize)} Sq.Ft.`
												: propertyType === 'plot'
												? `${addingCommasToNumber(property.plotArea)} sq.ft.`
												: `${property.carpetArea} Sq.Ft.`}
										</span>
									</span>
								</div>
								<div
									className={`flex items-center ${
										propertyType === 'rent' || propertyType === 'shared' ? '' : 'mr-1.2p'
									}`}
								>
									<img
										src={propertyType === 'plot' ? plotRate : furnishIcon}
										alt={propertyType === 'plot' ? 'Rate' : 'furnishIcon'}
										className='h-1.4p w-1.4p'
									/>
									<span
										title={
											propertyType === 'plot'
												? `${addingCommasToNumber(property?.pricePerUnit)} per sq. ft.`
												: `${getFurnishingType(property?.furnishing)}`
										}
										className='text-12 px-0.2p text-gray-lightest font-semibold'
									>
										{propertyType === 'plot'
											? `₹${addingCommasToNumber(property?.pricePerUnit)} per sq. ft.`
											: getFurnishingType(property?.furnishing)}
									</span>
								</div>
								{(propertyType === 'rent' || propertyType === 'shared') && (
									<div className='flex items-center'>
										<img src={family} alt={'tenantType'} className='h-2p w-2p' />
										<span
											title={toTitleCase(property?.leaseType)}
											className='text-12 text-gray-lightest font-semibold capitalize'
										>
											{toTitleCase(property?.leaseType)}
										</span>
									</div>
								)}
							</div>
						</div>
					)}
					<div
						className='flex-col absolute flex items-center justify-start bottom-0 border-slate-100'
						style={{
							borderRadius: '10px 0px 0px 10px',
							right: '-10px',
							top: '-6px',
							width: '100px',
							height:
								!property?.forLease &&
								(propertyType === 'rent' ||
									propertyType === 'shared' ||
									propertyType?.toLowerCase() === 'pg' ||
									propertyType === 'commercial_rent') &&
								(property?.deposit || property?.minDeposit)
									? '67px'
									: propertyType === 'sale' || propertyType === 'plot' || propertyType.includes('commercial')
									? '33px'
									: '51px',
							border: '1px solid #ebebeb',
							padding: '2px 0px 2px 2px',
						}}
					>
						<div
							className='text-12 flex-col font-extrabold flex items-center justify-start'
							style={{
								background: '#ebebeb 0% 0% no-repeat padding-box',
								borderRadius:
									!property?.forLease &&
									(propertyType === 'rent' ||
										propertyType === 'shared' ||
										propertyType === 'commercial_rent' ||
										propertyType?.toLowerCase() === 'pg') &&
									(property?.deposit || property?.minDeposit)
										? '6px 0px 0px 0px'
										: '6px 0px 0px 6px',
								width: '100%',
							}}
						>
							{property?.forLease ? (
								<>
									<span className='text-18 text-white font-extrabold text-builder-green'>
										{`${convertCurrency(property?.deposit)}`}
									</span>
									<span style={{ color: '#8B8B8B', fontSize: '9px', paddingBottom: '4px' }} className='font-semibold '>
										{`${getFormatedPropertyValue(property, propertyType)}`}
									</span>
								</>
							) : (
								<>
									<span className='text-18 text-white font-extrabold text-builder-green'>
										{`${getFormatedPropertyValue(property, propertyType)}`}
									</span>
									{(propertyType === 'rent' ||
										propertyType === 'pg' ||
										propertyType === 'shared' ||
										propertyType === 'commercial_rent') && (
										<span
											style={{ color: '#8B8B8B', fontSize: '9px', paddingBottom: '4px' }}
											className='font-semibold '
										>
											Rent{' '}
											{property?.maintenance || property?.maintenanceExtra ? (
												<>
													<span>{`+ ${convertCurrency(
														property?.maintenanceAmount || property?.maintenanceCost
													)}`}</span>
													<img
														alt='-'
														src={maintenanceIcon}
														className='absolute'
														style={{ bottom: '26px', right: '16px' }}
													></img>
												</>
											) : (
												'Only'
											)}
										</span>
									)}
								</>
							)}
						</div>
						{!property?.forLease &&
							(propertyType === 'rent' ||
								propertyType === 'shared' ||
								propertyType?.toLowerCase() === 'pg' ||
								propertyType === 'commercial_rent') &&
							(property?.deposit || property?.minDeposit) && (
								<div className='text-10 flex items-center justify-start font-semibold text-gray-lightest'>
									<span className='text-10 flex items-center justify-start font-semibold text-gray-lightest'>
										{`${convertCurrency(property?.deposit || property?.minDeposit)} Deposit`}
									</span>
								</div>
							)}
					</div>
					<div className='flex items-center justify-center mt-0.7p'>
						<div
							text='Abuse Report'
							className='cursor-pointer abuse-btn relative border border-last-search-border border-solid'
							style={{
								boxShadow: '0 12px 16px rgb(69 91 99 / 8%)',
								borderRadius: '6px',
								opacity: '1',
								height: '42px',
								width: '52px',
								marginRight: '10px',
							}}
						>
							<Button
								onClick={(event) => {
									shortlistProperty(event);
									nbCache.set('leaveIntentStatus', { status: false });
								}}
								// className='property-card-action-icon-btn'
								style={{ color: '#6e6d6d' }}
								btnStyle='none'
								size='md'
								tooltip={
									isShortlistClicked
										? isShortlist
											? 'Click to un-shortlist'
											: 'Click to Shortlist'
										: property?.shortlistedByLoggedInUser
										? 'Click to un-shortlist'
										: 'Click to Shortlist'
								}
								id='shortlistProperty'
								isMobile={false}
							>
								<span
									// className='my-0 mx-auto bg-no-repeat bg-shortlisticons bg-shortlistps h-3p w-3p shortlist-icon'
									className='h-3p w-3p absolute right-0.7p top-0.6p'
									style={{ right: '7px', top: '6px' }}
								>
									<div className='py-0.2p'>
										{/* <Icons
											type={
												isShortlistClicked
													? isShortlist
														? 'shortlist'
														: 'unshortlist'
													: property?.shortlistedByLoggedInUser
													? 'shortlist'
													: 'unshortlist'
											}
											svgStyles='m-0'
											color={
												isShortlistClicked
													? isShortlist
														? '#fd3752'
														: 'transparent'
													: property?.shortlistedByLoggedInUser
													? '#fd3752'
													: 'transparent'
											}
										/> */}
									</div>
								</span>
							</Button>
						</div>
						<Button
							onClick={(event) => contactOwnerClick(event)}
							className='mr-0 flex-1 p-0 rounded-md  w-20p flex items-center justify-center btn-info'
							text='Get Owner Details'
							btnStyle='default'
							size='md'
							disabled={
								(property &&
									property.contactedStatusDetails &&
									typeof property.contactedStatusDetails === 'object' &&
									property.contactedStatusDetails.contacted === 'true' &&
									!openChat) ||
								contactedNotVerifiedIdsForListPage?.includes(property.id) ||
								(contactedIdsForListPage?.includes(property.id) && !openChat)
							}
							id='getOwnerDetails'
						>
							{(property &&
								property.contactedStatusDetails &&
								typeof property.contactedStatusDetails === 'object' &&
								property.contactedStatusDetails.contacted === 'true') ||
							contactedIdsForListPage?.includes(property.id) ? (
								<div className='flex items-center justify-center'>

									<span className='ml-1p'>{openChat ? getChatOpenLabel(property?.propertyType) : 'Contacted'}</span>
								</div>
							) : contactedNotVerifiedIdsForListPage?.includes(property.id) ? (
								'Requested'
							) : (
								<>
									<span className='h-1.3p w-1.3p mr-0.5p mb-1.1p'>
										<img src={call} alt='' className='h-1.3p w-1.3p' />
									</span>
									Get Owner Details
								</>
							)}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewListPropertyCard;