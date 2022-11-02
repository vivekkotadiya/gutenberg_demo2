/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {useEffect, useRef } from "@wordpress/element";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import Mapicon from "../../assets/img/beachflag.png";
import { PanelBody, __experimentalNumberControl as NumberControl } from "@wordpress/components";

/**
 * Internal dependencies
 */
import metadata from "./block.json";
import { stack } from '../icon';

const { name } = metadata;

export { metadata, name };
 
export const settings = {
	attributes: {
		block_id: {
			type: "string",
			default: "124887878",
		},
		content: {
			type: "array",
			source: "children",
			selector: "div",
		},
		lat: {
			type: "integer",
			default: "52.5069312",
		},
		lang: {
			type: "integer",
			default: "13.14454",
		},
		zoom: {
			type: "integer",
			default: "8",
		},
	},
	icon : stack,
	edit: (props) => {

		const { clientId, setAttributes } = props;

		setAttributes({ block_id: clientId });
		setAttributes({ mapicon: Mapicon });

		const position = {
			lat: Number(props.attributes.lat),
			lng: Number(props.attributes.lang),
		};

		const componentRef = useRef(null);
		
		useEffect(
			(callback) => {

				const { ownerDocument } = componentRef.current;

				const { defaultView } = ownerDocument;

				let map;

				map = new window.google.maps.Map(
					defaultView.document.getElementById("map_" + props.attributes.block_id),
					{
						center: position,
						zoom: Number(props.attributes.zoom),
					}
				);

				new google.maps.Marker({
					position: position,
					map,
					icon: Mapicon,
				});
			},
			[componentRef.current , props.attributes.lat, props.attributes.lang]
		);

		props = useBlockProps( { ...props, ...componentRef } );

		return (
			<>
				<InspectorControls key="setting">
					<PanelBody
						title={ __( 'Settings', 'inxperts-gutenberg-blocks' ) }
						initialOpen={ false }
						>
							<NumberControl
								label={__(
									"Latitude",
									"inxperts-gutenberg-blocks"
								)}
								isShiftStepEnabled={ true }
								onChange={ (value) => setAttributes({ lat: Number(value) }) }
								value={ props.attributes.lat }
							/>
							<NumberControl
								label={__(
									"Longitude",
									"inxperts-gutenberg-blocks"
								)}
								isShiftStepEnabled={ true }
								onChange={ (value) => setAttributes({ lang: Number(value) }) }
								value={ props.attributes.lang }
							/>
					</PanelBody>
				</InspectorControls>

				<div {...useBlockProps({ block_id: props.attributes.block_id })}
					style={{ display: "flex", width: "100%", height: "100%" }} ref={componentRef}
				>
					<div
						class="map"  
						id={"map_" + props.attributes.block_id}
						data-marker={Mapicon}
						data-zoom={Number(props?.attributes?.zoom) }
						data-lat={Number(props?.attributes?.lat)}
						data-lang={Number(props?.attributes?.lang)}
						style={{ display: "flex", width: "100%", "min-height": "400px" }}
					></div>
				</div>
			</>
		);
	},
	save: (props) => {
		return (
			<div style={{ display: "flex", width: "100%", height: "100%" }}>
				<div
					class="map" 
					id={"map_" + props.attributes.block_id}
					data-marker={Mapicon}
					data-zoom={Number(props.attributes.zoom)}
					data-lat={Number(props.attributes.lat)}
					data-lang={Number(props.attributes.lang)}
					style={{ display: "flex", width: "100%", "min-height": "400px" }}
				></div>
			</div>
		);
	},
}